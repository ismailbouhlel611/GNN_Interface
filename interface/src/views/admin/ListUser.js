import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Tooltip,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  Progress,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";

import { getAllUsers } from "../../actions/auth";

const UserList = ({ users, getAllUsers }) => {
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  console.log(users)
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Table variant="simple" color="gray.500" mb="24px" style={{ marginTop: '70px' }}>
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Status</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((user) => (
          <Tr key={user.id}>
            <Td>{user.first_name}</Td>
            <Td>{user.last_name}</Td>
            <Td>{user.email}</Td>
            <Td>
            <Icon
                          w='24px'
                          h='24px'
                          me='5px'
                          color={
                            user.is_active === true
                              ? "green.500"
                              : user.is_active === false
                              ? "red.500":null
                          }
                          as={
                            user.is_active === true
                              ? MdCheckCircle
                              : user.is_active === false
                              ? MdOutlineError
                              : null
                          }
                        />
            </Td>
            <Td>
              <Flex justify="space-between">
                <Tooltip label="Edit" placement="top">
                  <IconButton
                    aria-label="edit"
                    icon={<MdEdit />}
                    variant="ghost"
                    size="sm"
                    colorScheme="brandScheme"
                  />
                </Tooltip>
                <Tooltip label="Delete" placement="top">
                  <IconButton
                    aria-label="delete"
                    icon={<MdDelete />}
                    variant="ghost"
                    size="sm"
                    colorScheme="red"
                  />
                </Tooltip>
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const mapStateToProps = (state) => ({
  users: state.auth.users,
});

export default connect(mapStateToProps, { getAllUsers })(UserList);
