import {Input, Container, Flex} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";
function SearchBar() {
    return (
        <div>
            <Container>
                <Flex direction={{base: "column", sm: "row"}} gap="sm" align="center" >
                    <Input placeholder="Search" rightSection={<IconSearch />} />
                </Flex>
            </Container>
        </div>
    );
}

export default SearchBar;
