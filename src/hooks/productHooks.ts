import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { Product } from "../types/Product";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  });

export const useGetProductDetails = (slug: string) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/${slug}`)).data,
  });

export const useGetCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      (await apiClient.get<[]>(`/api/products/categories`)).data,
  });
