namespace website.AlivioApi.Models
{
    public class AlivioDatabaseSettings : IAlivioDatabaseSettings
    {
        public string MembersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IAlivioDatabaseSettings
    {
        string MembersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}