import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
    error?: FieldError;
}

//ForwardRefRenderFunctioné uma função de renderização , que recebe props e parâmetros ref e retorna um nó React - não é um componente:

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error = null, ...rest }, ref) => {
    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
                id={name}
                name={name}
                type="email"
                focusBorderColor='pink.500'
                bgColor="gray.900"
                variant='filled'
                _hover={{
                    bgColor: "gray.900"
                }}
                size='lg'
                ref={ref}

                {...rest}
            />
            {/* Componente de dentro do chakra que mostra mensagens no formulário */}
            {!!error &&
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            }
        </FormControl>

    )
}

export const Input = forwardRef(InputBase) // Embalando um componente para poder receber uma ref