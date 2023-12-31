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

    @Override
    public Product getProductById(int id) {
        return productRepo.findById(id).get();
    }

    @Override
    public Product updateProduct(int id, Product product) {
        Product productFromDB = productRepo.findById(id).get();
        productFromDB.setName(product.getName());
        productFromDB.setPrice(product.getPrice());
        productFromDB.setQuantity(product.getQuantity());

        return productRepo.save(productFromDB);
    }

    @Override
    public Product deleteProductById(int id) {
        Product productFromDB = productRepo.findById(id).get();
        productRepo.deleteById(id);
        return productFromDB;
    }
}
