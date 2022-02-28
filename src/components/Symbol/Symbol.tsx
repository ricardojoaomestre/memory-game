import { ISymbol } from '../../db/symbols';
import './Symbol.css';

export enum SymbolSize {
    Normal = 'normal',
    Small = 'small'
}

interface ISymbolProps {
    value: ISymbol;
    size?: SymbolSize | SymbolSize.Normal;
    disabled?: boolean | false;
}

const Symbol = ({value, size, disabled, ...rest}: ISymbolProps) => (
    <span className={`symbol-${size} ${disabled ? 'disabled' : ''}`} {...rest}>
        {value.symbol}
    </span>
);

export default Symbol;