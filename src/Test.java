import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;
import java.util.stream.IntStream;

public class Test {
    public static void main(String[] args) {
        List<Integer> lst = new ArrayList<>();
        lst.add(5);
        IntStream intStream = lst.stream().mapToInt(n -> n);
        lst.add(9);
        System.out.println(intStream.count());
    }
}

abstract class another {
    public abstract void test();
}