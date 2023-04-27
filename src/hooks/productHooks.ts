import { useQuery } from "@tanstack/react-query";
import axiosClient from "../axiosClient";
import { Product } from "../types/Product";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () =>
      (await axiosClient.get<Product[]>(`api/products`)).data,
  });

export const useGetProductDetails = (slug: string) =>
  useQuery({
    queryKey: ["product", slug],
    queryFn: async () =>
      (await axiosClient.get<Product>(`api/products/${slug}`)).data,
  });

export const useGetCategories = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      (await axiosClient.get<[]>(`/api/products/categories`)).data,
  });
