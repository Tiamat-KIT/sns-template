import { cva } from 'styled-system/css'
import {styled} from 'styled-system/jsx'
import { type RecipeVariantProps } from 'styled-system/types'

export const ButtonStyle = cva({
    base: {
        /* borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'gray', */
        rounded: "lg",
        paddingY: '8px',
        paddingX: '15px',
        fontWeight: 'extrabold',
        transition: '1s',
        _hover: {
            transform: 'scale(0.9)',
        }
    },
    variants: {
        type: {
            default: {
                background: 'linear-gradient(135deg,rgba(9,0,154,1) 0%, rgba(73,73,249,1) 48%, rgba(0,212,255,1) 100%)',
                color: 'white',
                _hover: {
                    backgroundColor: 'lightgray'
                }
            },
            danger: {
                background: 'linear-gradient(180deg, rgba(140,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(135,0,0,1) 100%)',
                color: 'white',
                _hover: {
                    backgroundColor: 'darkred',
                }
            },
        },
        shadow: {
            default: {
                shadow: 'none'
            },
            xl: {
                shadow: 'xl'
            }
        }
    },
    defaultVariants: {
        type: 'default',
        shadow: 'default'
    }
})

export type ButtonVariants = RecipeVariantProps<typeof ButtonStyle>
export const Button = styled('button',ButtonStyle)