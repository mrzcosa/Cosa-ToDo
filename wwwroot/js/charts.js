let statusChart;
let priorityChart;

function renderCharts() {

    const pending =
        tasks.filter(t => t.status === "Pending").length;

    const completed =
        tasks.filter(t => t.status === "Completed").length;

    const low =
        tasks.filter(t => t.priority === "Low").length;

    const medium =
        tasks.filter(t => t.priority === "Medium").length;

    const high =
        tasks.filter(t => t.priority === "High").length;

    if(statusChart) statusChart.destroy();
    if(priorityChart) priorityChart.destroy();

    statusChart = new Chart(
        document.getElementById('statusChart'),
        {
            type:'doughnut',
            data:{
                labels:['Pending','Completed'],
                datasets:[{
                    data:[pending,completed]
                }]
            }
        }
    );

    priorityChart = new Chart(
        document.getElementById('priorityChart'),
        {
            type:'pie',
            data:{
                labels:['Low','Medium','High'],
                datasets:[{
                    data:[low,medium,high]
                }]
            }
        }
    );
}