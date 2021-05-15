using website.AlivioApi.Models;
using website.AlivioApi.Service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AlivioApi.Controllers
{
    [Route("api/members")]
    [ApiController]
    public class MemberController : ControllerBase
    {

        private readonly MemberService _members;

        public MemberController(MemberService members) 
        {
           _members = members;
        }

        [HttpGet]
        public ActionResult<List<Member>> Get() =>
             _members.Get();
        
        
        [HttpGet("{id}")]
        public ActionResult<Member> Get(string id)
        {
            var member = _members.Get(id);
        
            if (member == null)
            {
                return NotFound();
            }
        
            return member;
        }

        [HttpPost]
        public ActionResult<Member> Create(Member member)
        {
            _members.Create(member);
        
            return CreatedAtRoute("GetMember", new { id = member.Id.ToString() }, member);
        }

        [HttpPut]
        public ActionResult Update(string id, Member member)
        {     
            if(_members.Get(id) == null)
            {
                return NotFound();
            }
        
            _members.UpdateOne(id, member);
            return Ok();
        }
        
        
        [HttpDelete("{name}")]
        public string DeleteByName(string name)
        {
            _members.DeleteAllByName(name);
            
            return $"all users with the name {name} are deleted";
        }
        
        [HttpDelete]
        public ActionResult<string> DeleteOneById(string id)
        {
              var result =  _members.DeleteOne(id);
            
              return "Delete";
        }
        
    }
}
