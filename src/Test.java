import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.OptionalDouble;
import java.util.Random;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Test {
    public static void main(String[] args) {

        Optional<Double> opt = average();
        opt.ifPresent(System.out::println); // 95.0

    }

    public static Optional<Double> average(int... scores) {
        if (scores.length == 0)
            return Optional.empty();
        int sum = 0;
        for (int score : scores)
            sum += score;
        return Optional.of((double) sum / scores.length);
    }
}
