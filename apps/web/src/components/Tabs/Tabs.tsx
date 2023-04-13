import * as React from 'react'
import { List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { Icon } from '@iconify/react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import {
  listStyle,
  listItemButtonStyle,
  listItemButtonSelectedStyle,
} from './Tabs.styled'

const tabsData = [
  { value: 'home', label: 'Home', icon: <HomeIcon />, href: '#' },
  {
    value: 'active-plans',
    label: 'Active Plans',
    icon: <EventAvailableIcon />,
    href: '#',
  },
  {
    value: 'my-programs',
    label: 'My Programs',
    icon: (
      <Icon icon="mdi:gamepad-circle-outline" width="1.5rem" height="1.5rem" />
    ),
    href: '#',
  },
  {
    value: 'profile',
    label: 'Profile ',
    icon: <AccountCircleOutlinedIcon />,
    href: '#',
  },
]
export default function Tabs() {
  const [selectedValue, setSelectedValue] = React.useState('home')

  const handleButtonClick = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <List style={listStyle}>
      {tabsData.map((item, index) => (
        <ListItem style={{ padding: 0 }} key={index}>
          <ListItemButton
            disableRipple
            href={item.href}
            style={
              selectedValue === item.value
                ? listItemButtonSelectedStyle
                : listItemButtonStyle
            }
            onClick={() => handleButtonClick(item.value)}
          >
            <ListItemIcon
              style={
                selectedValue === item.value
                  ? listItemButtonSelectedStyle
                  : listItemButtonStyle
              }
            >
              {item.icon}
            </ListItemIcon>
            {item.label}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
