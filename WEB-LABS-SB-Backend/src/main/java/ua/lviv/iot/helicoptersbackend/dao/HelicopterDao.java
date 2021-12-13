package ua.lviv.iot.helicoptersbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.helicoptersbackend.model.Helicopter;
import ua.lviv.iot.helicoptersbackend.model.enums.HelicopterType;

import java.util.List;

@Repository
public interface HelicopterDao extends JpaRepository<Helicopter, Integer> {
    @Query("select helicopter from Helicopter helicopter where helicopter.type in :sqlFiltersList")
    List<Helicopter> findHelicoptersByFilters(List<HelicopterType> sqlFiltersList);

    void deleteById(Integer id);
}
