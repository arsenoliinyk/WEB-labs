package ua.lviv.iot.helicoptersbackend.model;

import lombok.*;
import ua.lviv.iot.helicoptersbackend.model.enums.HelicopterType;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Helicopter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Integer numOfPassengers;

    private Integer maxSpeed;

    @Enumerated(EnumType.STRING)
    private HelicopterType type;

    private Integer value;
}
