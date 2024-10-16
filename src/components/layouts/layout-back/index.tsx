import type React from 'react';

import { Stack, Text, Icon } from '@chakra-ui/react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import type { StackProps } from '@chakra-ui/react';
import type { To } from 'react-router-dom';

export interface LayoutBackProps extends StackProps {
  children: React.ReactNode;
  title?: string;
  path?: To;
}

export const LayoutBack: React.FC<LayoutBackProps> = ({ children, path, title, ...stackProps }) => (
  <Stack bg="white" px={{ base: 4, md: 8 }} py="24px" rounded="8px" w="full" {...stackProps}>
    <Stack flexDir="row" alignItems="center">
      <Link to={path || (-1 as To)} style={{ display: 'flex', alignItems: 'center' }} role="group">
        <Icon
          display="inline-block"
          as={BiArrowBack}
          boxSize={6}
          color="neutral.300"
          _groupHover={{ color: 'primary' }}
        />
        <Text
          color="neutral.300"
          sx={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '22px',
            marginLeft: '8px',
          }}
          _groupHover={{ color: 'primary' }}
        >
          {!title && 'Back'}
        </Text>
      </Link>
      <Text
        color="neutral.300"
        sx={{
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '22px',
          marginLeft: '0px',
        }}
        noOfLines={1}
        _groupHover={{ color: 'primary' }}
      >
        {title}
      </Text>
    </Stack>
    {children}
  </Stack>
);
