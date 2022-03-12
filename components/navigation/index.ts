export { Navigation as default } from "./Navigation";
export { Navigation } from "./Navigation";

export interface NavigationProps {
    bordered?: boolean,
    links: {
        text: string;
        link: string;
    }[]
}