import {Tabs} from '@mantine/core';
function TopTab() {
    return (
        <Tabs defaultValue={"All"} >
            <Tabs.List justify="center" >
                <Tabs.Tab value="All">All</Tabs.Tab>
                <Tabs.Tab value="Guard">Visitors</Tabs.Tab>
                <Tabs.Tab value="Residential">Residential</Tabs.Tab>
                <Tabs.Tab value="ResidentialStaff">Residential Staff</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}

export default TopTab;
