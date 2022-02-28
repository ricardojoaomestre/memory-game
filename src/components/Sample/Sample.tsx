import React from 'react';
import { ISymbol, isEqual } from '../../db/symbols';
import Symbol, {SymbolSize} from '../Symbol/Symbol';
import './Sample.css';

interface ISampleProps {
    sample: Array<ISymbol>;
    itemsFound: Array<ISymbol>;
}

interface ISampleListProps {
    children?: React.ReactNode;
}

interface ISampleItemProps {
    item: ISymbol;
    disabled: boolean;
}

const size = SymbolSize.Normal;

const SampleList:React.FC<ISampleListProps> = ({children, ...rest}) => (
    <ul className="Sample-container" {...rest}>
        {children}
    </ul>
)

const SampleItem:React.FC<ISampleItemProps> = ({item, disabled}) => (
    <li key={`Sample_${item.name}`} className="Sample-item">
        <Symbol value={item} size={size} disabled={disabled} />
    </li>
)

const Sample = ({ sample, itemsFound,...rest}: ISampleProps) => sample && sample.length > 0 ? (
    <SampleList {...rest}>
        {sample.map(
            (item:ISymbol) => {
                const isFound = !!itemsFound.find((foundItem) => isEqual(item, foundItem));
                return <SampleItem item={item} disabled={isFound} />
            }
        )}
    </SampleList>) : null
    


export default Sample;