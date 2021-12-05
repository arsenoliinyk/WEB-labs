package ua.lviv.iot.helicoptersbackend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.helicoptersbackend.model.Helicopter;
import ua.lviv.iot.helicoptersbackend.model.enums.HelicopterType;
import ua.lviv.iot.helicoptersbackend.service.HelicopterService;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@AllArgsConstructor
@RequestMapping("/helicopters")
public class HelicopterController {

    private final HelicopterService helicopterService;

    @GetMapping
    public List<Helicopter> getAllHelicopters(final @RequestParam(value = "filters", required = false) String[] filters) {
        if (filters != null) {
            return filters.length != 0 ? helicopterService.getHelicopters(filters) : helicopterService.getAllHelicopters();
        }
        return helicopterService.getAllHelicopters();
    }

    @GetMapping("/types")
    public HelicopterType[] getAllHelicopterTypes() {
        return HelicopterType.values();
    }

    @PostMapping
    public Helicopter createHelicopter(final @RequestBody Helicopter helicopter) {
        return helicopterService.createHelicopter(helicopter);
    }

    @PutMapping
    public Helicopter updateHelicopter(final @RequestBody Helicopter helicopter) {
        return helicopterService.updateHelicopter(helicopter);
    }

    @DeleteMapping("/{id}")
    public void deleteHelicopter(final @PathVariable("id") Integer id) {
        helicopterService.deleteHelicopter(id);
    }
}
