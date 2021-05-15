using website.AlivioApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace website.AlivioApi.Service
{
    public class MemberService
    {
        private readonly IMongoCollection<Member> _members;


        public MemberService(IAlivioDatabaseSettings settings) 
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _members = database.GetCollection<Member>(settings.MembersCollectionName);
        }

        public List<Member> Get() =>
            _members.Find(book => true).ToList();

        public Member Get(string id) =>
            _members.Find(member => member.Id == id).FirstOrDefault();

        public Member Create(Member member)
        {
            _members.InsertOne(member);
            return member;
        }

        public Task<DeleteResult> DeleteOne(string id)
        {
            return _members.DeleteOneAsync(member => member.Id == id);
        }

        public void DeleteAllByName(string name)
        {
            _members.DeleteMany(member => member.Name == name);
        }
        

        public void UpdateOne(string id, Member m) =>
          _members.ReplaceOne(members => members.Id == id, m);
        
        
    }
}