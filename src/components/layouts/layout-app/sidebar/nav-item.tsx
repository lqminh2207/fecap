import type { ElementType, ReactNode } from 'react';

import { Box, Flex, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import type { FlexProps } from '@chakra-ui/react';

export interface NavItemProps extends FlexProps {
  icon?: ElementType;
  children: ReactNode;
  path?: string;
  isTransitionOn?: boolean;
}

export const NavItem = ({ icon, children, path, isTransitionOn = true, ...rest }: NavItemProps) => (
  <NavLink
    end={false}
    to={path ?? '#'}
    style={{
      textDecoration: 'none',
    }}
  >
    {({ isActive }) => {
      const _isActive = isActive && !!path;

      return (
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="8px"
          role="group"
          cursor="pointer"
          fontWeight={600}
          bg={_isActive ? 'primary' : ''}
          transition={isTransitionOn ? 'all 0.3s' : 'none'}
          color={_isActive ? 'white' : 'neutral.300'}
          _hover={{
            bg: !_isActive ? 'primary' : '',
            color: !_isActive ? 'white' : '',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              boxSize={5}
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          <Box as="span" fontSize="14px" lineHeight="19px" height="full">
            {children}
          </Box>
        </Flex>
      );
    }}
  </NavLink>
);
