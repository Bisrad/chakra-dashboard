import { Image, useColorMode, useColorModeValue, Button, VStack, HStack, Stack, Heading, Text, Spacer, AspectRatio, Divider } from '@chakra-ui/react';

const Cart = () => {
	const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue('gray.50', 'white.alpha.50');
	const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');

	return (
		<VStack w='full' h='full' p={10} spacing={10} alignItems='flex-start' bg={bgColor}>
			<VStack spacing='3' alignItems='flex-start'>
				<Heading size='2xl'>Your Cart</Heading>
				<Text>
					if the price is too hard on your eyes, {'\n'}
					<Button onClick={toggleColorMode} variant='link'>
						try changing the them
					</Button>
				</Text>
			</VStack>
			<HStack spacing={6} alignItems='center' w='full'>
				<AspectRatio ratio={1} w={24}>
					<Image src='/images/skateboard.jpg' alt='skateboard image' />
				</AspectRatio>
				<Stack spacing={0} w='full' direction='row' justifyContent='space-between' alignItems='center'>
					<VStack w='full' spacing={0} alignItems='center'>
						<Heading size='md'>Penny board</Heading>
						<Text color={secondaryTextColor}>PCXJHSDJ329</Text>
					</VStack>
					<Heading size='sm' textAlign='end'>
						$119.00
					</Heading>
				</Stack>
			</HStack>
			<VStack spacing={4} alignItems='stretch' w='full'>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Subtotal</Text>
					<Heading size='sm'>$119.00</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Shipping</Text>
					<Heading size='sm'>$19.99</Heading>
				</HStack>
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Taxes (estimated)</Text>
					<Heading size='sm'>$23.80</Heading>
				</HStack>
				<Divider />
				<HStack justifyContent='space-between'>
					<Text color={secondaryTextColor}>Total</Text>
					<Heading size='sm'>$162.79</Heading>
				</HStack>
			</VStack>
		</VStack>
	);
};

export default Cart;
