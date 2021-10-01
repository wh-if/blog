package cn.whif.blogserver.dao;

import cn.whif.blogserver.mapper.BlogMapper;
import cn.whif.blogserver.pojo.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class BlogDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Blog> queryBlogs(int page, int limit){
        List<Blog> blogs = jdbcTemplate.query(
                "select * from blog order by created desc limit ?,? ",
                new BlogMapper(),
                (page - 1) * limit, limit
        );
        return blogs;
    }

    public Blog queryBlogById(String id){
        Blog query = jdbcTemplate.queryForObject(
                "select * from blog where id = ?",
                new BlogMapper(),
                id
        );
        return query;
    }

}
