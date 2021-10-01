package cn.whif.blogserver.controller;

import cn.whif.blogserver.dao.MsgDao;
import cn.whif.blogserver.pojo.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MsgController {
    @Autowired
    MsgDao msgDao;

    @PostMapping("/msg")
    public String saveMsg(@RequestBody Msg msg){
        System.out.println(msg);
        int i = msgDao.saveMsg(msg);
        if(i>0)
            return "发送成功！";
        else return "发送失败！";
    }
}
