import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Flex, Spacer, IconButton, Badge, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0LXNoaXJ0fGVufDB8fHx8MTcxMjY1NzI1Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqZWFuc3xlbnwwfHx8fDE3MTI2NTcyNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVzc3xlbnwwfHx8fDE3MTI2NTcyNTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Jacket",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqYWNrZXR8ZW58MHx8fHwxNzEyNjU3MjUzfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Box>
      <Flex bg="gray.100" p={4} alignItems="center">
        <Heading size="xl">Clothing Brand</Heading>
        <Spacer />
        <IconButton icon={<FaShoppingCart />} variant="outline" onClick={onOpen}>
          {cart.length > 0 && (
            <Badge colorScheme="red" borderRadius="full" ml={2}>
              {cart.length}
            </Badge>
          )}
        </IconButton>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={6} p={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" p={4}>
            <Image src={product.image} alt={product.name} mb={4} />
            <Heading size="md">{product.name}</Heading>
            <Text fontWeight="bold">${product.price}</Text>
            <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              {cart.map((item) => (
                <Flex key={item.id} alignItems="center" mb={4}>
                  <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
                  <Box>
                    <Heading size="sm">{item.name}</Heading>
                    <Text fontWeight="bold">${item.price}</Text>
                  </Box>
                  <Spacer />
                  <IconButton icon={<FaTrash />} variant="ghost" onClick={() => removeFromCart(item.id)} />
                </Flex>
              ))}
              <Button colorScheme="blue" mt={4}>
                Checkout
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Index;
