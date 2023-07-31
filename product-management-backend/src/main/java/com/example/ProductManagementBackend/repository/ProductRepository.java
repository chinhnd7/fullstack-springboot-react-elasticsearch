package com.example.ProductManagementBackend.repository;

import com.example.ProductManagementBackend.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Integer> {
}
