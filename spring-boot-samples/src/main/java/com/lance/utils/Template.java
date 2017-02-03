package com.lance.utils;

import java.io.File;
import java.io.IOException;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class Template {
	public static String readTemplae(){
		File file;
		Document doc = null; 
		try {
			file = new ClassPathResource("static/index.html").getFile();
			doc = Jsoup.parse(file,"utf-8");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return doc.html();
		
	}
}
