import Root from './root';
import Items from '../components/Items';

export default function Info() {
  return (
    <>
      <Root />
      <main id='info'>
        <h1>Info Page</h1>
        <p>This is the Information page.</p>
        <Items />
      </main>
    </>
  );
}
