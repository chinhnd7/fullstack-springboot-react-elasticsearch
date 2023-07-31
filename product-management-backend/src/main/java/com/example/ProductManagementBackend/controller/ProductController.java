package com.example.ProductManagementBackend.controller;

import com.example.ProductManagementBackend.entity.Product;
import com.example.ProductManagementBackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/all")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/insert")
    public Product insertProductInDb(@RequestBody Product product) {
        return productService.insertProductIntoDatabase(product);
    }
}
