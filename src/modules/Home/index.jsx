import { FeatureCard } from "../../components/FeatureCard";
import { Hero } from "../../components/Hero";
import { Products } from "../../components/Products";
import { StatCard } from "../../components/StatCard";

export const Home = () => {
    return (
        <>
            <Hero />
            <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
            </div>
            <Products />
            <FeatureCard />
            <StatCard />
        </>

    );
}