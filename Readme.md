# Example of Adding Flow Typed Props to Styled Component

Originally posted as an example to [a question](https://stackoverflow.com/questions/49041401/using-flow-for-styled-components-props) on StackOverflow

Question:

>So I have been playing around with type systems in JavaScript and for the most part things are working however there is an issue with styled-components. I can't seem to find a good way to apply flow to the props of a styled-component. So far the only solution I see is:
>
>    export type ButtonPropTypes = ReactPropTypes & {
>      styleType: 'safe' | 'info' | 'warning' | 'danger' | 'link',
>      isPill: boolean,
>      isThin: boolean,
>    };
>    
>    export const ButtonStyled = styled.button`
>      ${generateBaseStyles}
>      ${hoverStyles}
>      ${fillStyles}
>      ${thinStyles}
>      ${linkStyles}
>    `;
>    
>    export const Button = (props: ButtonPropTypes) => <ButtonStyled {...props} />;
>
>It seems pretty excessive that I have to create 2 component for every styled component.
>
>I am hoping my google skills are just crap and I am missing something but is there a better way to do this other than multiple components per styled component?
