import {styled} from 'styled-system/jsx'

export const Button = styled('button',{
    base: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray',
    },
    variants: {
        type: {
            default: {
                backgroundColor: 'white',
                color: 'black',
                _hover: {
                    backgroundColor: 'lightgray'
                }
            },
            danger: {
                backgroundColor: 'red',
                color: 'white',
                _hover: {
                    backgroundColor: 'darkred'
                }
            },
        }
    },
    defaultVariants: {
        type: 'default'
    }
})