function CurrentDate()
{
    const now=new Date();
    const day=now.getDate();
    const weekDayIndex=now.getDay();
    const monthIndex=now.getMonth();
    const year=now.getFullYear();

const weekDayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

return(
    <>
    <p>Date: {day}</p>
    <p>Day: {weekDayNames[weekDayIndex]}</p>
    <p>Month: {monthNames[monthIndex]}</p>
    <p>Year: {year}</p>
    </>
)
}
export default CurrentDate;