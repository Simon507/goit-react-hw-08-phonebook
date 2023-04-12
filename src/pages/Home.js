import { Helmet } from 'react-helmet';

import { ContactList } from '../components/contactList/ContactList';
import { Filter } from '../components/filter/Filter';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <>
      <Helmet>
        <title>All contacts</title>
      </Helmet>
      <h1>All contacts</h1>
      <Filter />
      <ContactList />
    </>
  );
}
