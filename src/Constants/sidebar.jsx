import { v4 as uuidv4 } from "uuid";
import { LineStyle, Timeline, TrendingUp, 
    PermIdentity, Storefront, AttachMoney, 
    BarChart, MailOutline, DynamicFeed, 
    ChatBubbleOutline, WorkOutline, Report
} from "@mui/icons-material";

const sidebar = [
    {
        id: uuidv4(), 
        title: 'Dashboard', 
        listItems: [
            {id: uuidv4(), name: 'Home', link: '/', icon: <LineStyle/>},
            {id: uuidv4(), name: 'Analytics', icon: <Timeline/>},
            {id: uuidv4(), name: 'Sales', icon: <TrendingUp/>}
        ]
    },
    {
        id: uuidv4(), 
        title: 'Quick Menu', 
        listItems: [
            {id: uuidv4(), name: 'Users', link: '/users', icon: <PermIdentity/>},
            {id: uuidv4(), name: 'NewUser', link: '/newuser', icon: <Storefront/>},
            {id: uuidv4(), name: 'Products', link: '/products', icon: <AttachMoney/>},
            {id: uuidv4(), name: 'Transactions', icon: <BarChart/>},
            {id: uuidv4(), name: 'Reports', icon: <MailOutline/>}
        ]
    },
    {
        id: uuidv4(), 
        title: 'Notifications', 
        listItems: [
            {id: uuidv4(), name: 'Mail', icon: <MailOutline/>},
            {id: uuidv4(), name: 'Feedback', icon: <DynamicFeed/>},
            {id: uuidv4(), name: 'Messages', icon: <ChatBubbleOutline/>}
        ]
    },
    {
        id: uuidv4(), 
        title: 'Staff', 
        listItems: [
            {id: uuidv4(), name: 'Manage', icon: <WorkOutline/>},
            {id: uuidv4(), name: 'Analytics', icon: <Timeline/>},
            {id: uuidv4(), name: 'Reports', icon: <Report/>}
        ]
    },
]

export { sidebar }