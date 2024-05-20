import Root from './root';
import Chart from '../components/Chart';

export default function Charts() {
  return (
    <>
      <Root />
      <main id='charts'>
        <h1>Charts Page</h1>
        <p>
          This is the charts page which will feature all the different charts in
          the applicaion.
        </p>
        <Chart />
      </main>
    </>
  );
}
