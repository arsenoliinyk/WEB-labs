package ua.lviv.iot.helicoptersbackend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lviv.iot.helicoptersbackend.dao.HelicopterDao;
import ua.lviv.iot.helicoptersbackend.model.Helicopter;
import ua.lviv.iot.helicoptersbackend.model.enums.HelicopterType;
import ua.lviv.iot.helicoptersbackend.service.HelicopterService;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ZooServiceImpl implements HelicopterService {

    private final HelicopterDao zooDao;

    @Override
    public List<Helicopter> getAllHelicopters() {
        return zooDao.findAll();
    }

    @Override
    public List<Helicopter> getHelicopters(String[] filters) {
        return zooDao.findHelicoptersByFilters(Arrays.stream(filters).map(HelicopterType::valueOf).collect(Collectors.toList()));
    }

    @Override
    public Helicopter createHelicopter(Helicopter zoo) {
        return zooDao.save(zoo);
    }

    @Override
    public Helicopter updateHelicopter(Helicopter zoo) {
        return zooDao.save(zoo);
    }

    @Override
    public void deleteHelicopter(Integer id) {
        zooDao.deleteById(id);
    }
}
