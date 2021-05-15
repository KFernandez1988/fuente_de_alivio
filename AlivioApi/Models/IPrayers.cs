namespace website.AlivioApi.Models
{
    public interface IPrayers
    {
        string MessageStack(
            string userName,
            string member,
            string[] chat
        );
    }
}