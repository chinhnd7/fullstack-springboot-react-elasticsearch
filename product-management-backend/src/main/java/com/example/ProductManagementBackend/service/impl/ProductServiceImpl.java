package com.example.ProductManagementBackend.service.impl;

import com.example.ProductManagementBackend.entity.Product;
import com.example.ProductManagementBackend.repository.ProductRepository;
import com.example.ProductManagementBackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepo;

    @Override
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    @Override
    public Product insertProductIntoDatabase(Product product) {

        return productRepo.save(product);
    }
}
