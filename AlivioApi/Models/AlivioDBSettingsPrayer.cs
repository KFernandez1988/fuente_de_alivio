namespace website.AlivioApi.Models
{
    public class AlivioDBSettingsPrayer : IAlivioDBSettingsPrayer
    {
        
        public string PrayersCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IAlivioDBSettingsPrayer
    {
        string PrayersCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
    
}