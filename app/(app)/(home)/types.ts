import { Category } from "@/payload-types";

export type Customcategory = Category & {
    subcategories: Category[]
}