import { v4 as uuidv4 } from "uuid";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export const features = [
    {id: uuidv4(), title: 'Revanue', price: 2_415, profit: -11.5, icon: <ArrowDownwardIcon color="error"/>},
    {id: uuidv4(), title: 'Sales', price: 6_755, profit: -1.4, icon: <ArrowDownwardIcon color="error"/>},
    {id: uuidv4(), title: 'Cost', price: 1_105, profit: -2.4, icon: <ArrowUpwardIcon color="success"/>}
]