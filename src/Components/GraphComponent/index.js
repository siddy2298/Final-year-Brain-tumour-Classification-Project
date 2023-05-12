import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphComponent = ({ prediction }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const tumorTypes = ["glioma", "meningimoa", "pituitary"];
    const predictedIndex = tumorTypes.indexOf(prediction[0]);

    // Assign values of 1 or 0 based on the prediction
    const dataValues = tumorTypes.map((tumorType, index) =>
      index === predictedIndex ? 1 : 0
    );

    // Create the chart when the component mounts
    const chart = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: tumorTypes,
        datasets: [
          {
            label: "Tumour Prediction",
            data: dataValues, // Use the modified data values
            backgroundColor: tumorTypes.map((_, index) =>
              index === predictedIndex
                ? "rgba(255, 99, 132, 0.5)"
                : "rgba(54, 162, 235, 0.5)"
            ),
            borderColor: tumorTypes.map((_, index) =>
              index === predictedIndex
                ? "rgba(255, 99, 132, 1)"
                : "rgba(54, 162, 235, 1)"
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Destroy the chart when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [prediction]);

  return <canvas ref={chartRef} />;
};

export default GraphComponent;
