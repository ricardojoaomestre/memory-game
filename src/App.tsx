import {useEffect, useState} from 'react';
import { getNRandomItems } from './utils/random';
import { ISymbol, symbols } from './db/symbols';
import Sample from './components/Sample';
const App = () => {
    const [data] = useState(getNRandomItems(symbols, 10));
    const [found, setFound] = useState<Array<ISymbol>>([]);

    useEffect(() => setFound(prev => [...prev, data[0]]),[]);

    return (
    <main>
        <Sample sample={data} itemsFound={found} />
    </main>
    )
};

export default App;