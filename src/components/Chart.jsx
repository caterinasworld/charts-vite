import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

import { backgroundColors, borderColors } from '../utils/chartColors';

export default function Chart() {
  const data = {
    labels: ['label 1', 'label 2', 'label 3', 'label 4'],
    datasets: [
      {
        data: [300, 50, 100, 50],
        backgroundColor: backgroundColors,
        borderColors: borderColors,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
