declare namespace JSX {
    interface IntrinsicElements {
        div: any
    }
}

const jsxFactory = (
    tag: string,
    attrs: {
        [key: string]: any
    },
    ...children: Array<any>
) => children
console.log(<div>
    a
</div>)