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
public class HelicopterServiceImpl implements HelicopterService {

    private final HelicopterDao helicopterDao;

    @Override
    public List<Helicopter> getAllHelicopters() {
        return helicopterDao.findAll();
    }

    @Override
    public List<Helicopter> getHelicopters(String[] filters) {
        return helicopterDao.findHelicoptersByFilters(Arrays.stream(filters).map(HelicopterType::valueOf).collect(Collectors.toList()));
    }

    @Override
    public Helicopter createHelicopter(Helicopter helicopter) {
        return helicopterDao.save(helicopter);
    }

    @Override
    public Helicopter updateHelicopter(Helicopter helicopter) {
        return helicopterDao.save(helicopter);
    }

    @Override
    public void deleteHelicopter(Integer id) {
        helicopterDao.deleteById(id);
    }
}
