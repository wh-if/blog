package cn.whif.blogserver.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Msg {
    private String id;
    private String name;
    private String time;
    private String msg;
    private String email;
}
