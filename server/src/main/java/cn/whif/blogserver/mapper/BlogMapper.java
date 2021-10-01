package cn.whif.blogserver.mapper;

import cn.whif.blogserver.pojo.Blog;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class BlogMapper implements RowMapper<Blog> {
    @Override
    public Blog mapRow(ResultSet resultSet, int i) throws SQLException {
        Blog blog = new Blog(
                resultSet.getString(1),
                resultSet.getString(2),
                resultSet.getString(3),
                resultSet.getString(4),
                resultSet.getString(5),
                resultSet.getString(6)
        );
        return blog;
    }
}
