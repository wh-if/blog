package cn.whif.blogserver.controller;

import cn.whif.blogserver.dao.BlogDao;
import cn.whif.blogserver.pojo.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class BlogController {
    @Autowired
    BlogDao blogDao;

    @GetMapping("/blogs/{page}")
    public List<Blog> getBlogs(@PathVariable("page")int page , int limit){
        List<Blog> blogs = blogDao.queryBlogs(page, limit);
        return blogs;
    }

    @GetMapping("/blog/{bid}")
    public Blog getBlogs(@PathVariable("bid")String bid){
        Blog blog = blogDao.queryBlogById(bid);
        return blog;
    }
}
