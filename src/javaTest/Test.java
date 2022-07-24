package javaTest;

import java.io.File;

public class Test {
    public static void main(String[] args) {
        File file = new File("test.txt");
        System.out.println(file.delete());

        System.out.println(System.getProperty("file.separator"));
        System.out.println(java.io.File.separator);
    }
}
