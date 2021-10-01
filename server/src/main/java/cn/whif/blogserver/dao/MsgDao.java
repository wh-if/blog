package cn.whif.blogserver.dao;

import cn.whif.blogserver.pojo.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class MsgDao {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public int saveMsg(Msg msg){
        int update = jdbcTemplate.update(
                "insert into msg (name,time,msg,email) values (?,?,?,?)",
                new Object[]{msg.getName(), msg.getTime(), msg.getMsg(), msg.getEmail()}
        );
        return update;
    }
}
