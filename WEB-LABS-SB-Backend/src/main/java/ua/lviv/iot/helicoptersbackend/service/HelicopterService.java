package ua.lviv.iot.helicoptersbackend.service;

import ua.lviv.iot.helicoptersbackend.model.Helicopter;

import java.util.List;

public interface HelicopterService {
    List<Helicopter> getAllHelicopters();

    List<Helicopter> getHelicopters(String[] filters);

    Helicopter createHelicopter(Helicopter helicopter);

    Helicopter updateHelicopter(Helicopter helicopter);

    void deleteHelicopter(Integer id);
}
