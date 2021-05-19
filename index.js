const btnPrev = document.getElementById("btn1");
const btnNext = document.getElementById("btn2");

const langs = [
  {
    name: "JavaScript",
    img: "./images/js.jpg",
    text: `JavaScript , often abbreviated as JS, is a programming language that 
    conforms to the ECMAScript specification.JavaScript is high-level,
    often just-in-time compiled, and multi-paradigm. It has curly-bracket
    syntax, dynamic typing, prototype-based object-orientation, and first-
    class functions.Alongside HTML and CSS, JavaScript is one of the core 
    technologies of the World Wide Web. Over 97% of websites use it 
    client-side for web page behavior, often incorporating third-party
    libraries. All major web browsers have a dedicated JavaScript engine
    to execute the code on the user's device.As a multi-paradigm language,
    JavaScript supports event-driven, functional, and imperative programming
    styles. It has application programming interfaces (APIs) for working with
    text, dates, regular expressions, standard data structures, and the 
    Document Object Model (DOM).The ECMAScript standard does not include
    any input/output (I/O), such as networking, storage, or graphics 
    facilities. In practice, the web browser or other runtime system 
    provides JavaScript APIs for I/O.JavaScript engines were originally 
    used only in web browsers, but they are now core components of other 
    software systems, most notably servers and a variety of applications.`,
  },
  {
    name: "Python",
    img: "./images/python.png",
    text: `Python is an interpreted high-level general-purpose programming 
        language. Python's design philosophy emphasizes code readability with
        its notable use of significant indentation. Its language constructs as
        well as its object-oriented approach aim to help programmers write 
        clear, logical code for small and large-scale projects. Python is 
        dynamically-typed and garbage-collected. It supports multiple 
        programming paradigms, including structured (particularly, procedural),
        object-oriented and functional programming. Python is often described as
        a "batteries included" language due to its comprehensive standard library.
        Guido van Rossum began working on Python in the late 1980s, as a successor
        to the ABC programming language, and first released it in 1991 as Python 
        0.9.0. Python 2.0 was released in 2000 and introduced new features, 
        such as list comprehensions and a garbage collection system using 
        reference counting and was discontinued with version 2.7.18 in 2020.Python
        3.0 was released in 2008 and was a major revision of the language that is 
        not completely backward-compatible and much Python 2 code does not run 
        unmodified on Python 3.`,
  },
  {
    name: "C++",
    img: "./images/cpp.png",
    text: `C++ is a general-purpose programming language created by 
    Bjarne Stroustrup as an extension of the C programming language, or 
    "C with Classes". The language has expanded significantly over time, 
    and modern C++ now has object-oriented, generic, and functional features 
    in addition to facilities for low-level memory manipulation. It is almost
    always implemented as a compiled language, and many vendors provide C++ 
    compilers, including the Free Software Foundation, LLVM, Microsoft, Intel,
    Oracle, and IBM, so it is available on many platforms.C++ was designed
    with an orientation toward system programming and embedded, resource-
    constrained software and large systems, with performance, efficiency, 
    and flexibility of use as its design highlights.[10] C++ has also been
    found useful in many other contexts, with key strengths being software
    infrastructure and resource-constrained applications,[10] including 
    desktop applications, video games, servers (e.g. e-commerce, web search
    , or databases), and performance-critical applications (e.g. telephone 
    switches or space probes).`,
  },
  {
    name: "C",
    img: "./images/c.png",
    text: ` C is a general-purpose, procedural computer programming language 
        supporting structured programming, lexical variable scope, and 
        recursion, with a static type system. By design, C provides constructs
        that map efficiently to typical machine instructions. It has found 
        lasting use in applications previously coded in assembly language. 
        Such applications include operating systems and various application 
        software for computer architectures that range from supercomputers 
        to PLCs and embedded systems.A successor to the programming language 
        B, C was originally developed at Bell Labs by Dennis Ritchie between 
        1972 and 1973 to construct utilities running on Unix. It was applied 
        to re-implementing the kernel of the Unix operating system. During 
        the 1980s, C gradually gained popularity. It has become one of the 
        most widely used programming languages, with C compilers from 
        various vendors available for the majority of existing computer 
        architectures and operating systems. C has been standardized by the 
        ANSI since 1989 (ANSI C) and by the International Organization for 
        Standardization (ISO).`,
  },
  {
    name: "Java",
    img: "./images/java.png",
    text: `Java is a high-level, class-based, object-oriented programming 
        language that is designed to have as few implementation dependencies 
        as possible. It is a general-purpose programming language intended to 
        let application developers write once, run anywhere (WORA), meaning
        that compiled Java code can run on all platforms that support Java 
        without the need for recompilation.[17] Java applications are typically 
        compiled to bytecode that can run on any Java virtual machine (JVM) 
        regardless of the underlying computer architecture. The syntax of Java 
        is similar to C and C++, but has fewer low-level facilities than either 
        of them. The Java runtime provides dynamic capabilities (such as 
        reflection and runtime code modification) that are typically not 
        available in traditional compiled languages. As of 2019, Java was one 
        of the most popular programming languages in use according to GitHub, 
        particularly for client-server web applications, with a reported 9 million
        developers.Java was originally developed by James Gosling at Sun 
        Microsystems (which has since been acquired by Oracle) and released in 
        1995 as a core component of Sun Microsystems' Java platform.`,
  },
];

let para = document.querySelector(".text");
let image = document.querySelector("img");
let heading = document.querySelector("h3");

para.innerHTML = langs[0].text;
image.setAttribute("src",langs[0].img);
heading.innerText= langs[0].name;
let count = 0;
// Adding functioning to the foward button
btnNext.addEventListener("click", varyNext);

window.addEventListener("keydown",(e)=>{
    if(e.key=="ArrowRight"){
        varyNext();
    }
    else if(e.key=="ArrowLeft"){
        varyPrev();
    }
})
// Add functioning to the backward button
btnPrev.addEventListener("click", varyPrev);

function varyNext(){
    count++;
    let cnt = count % 5;
    if(cnt==0){
        para.innerHTML = langs[0].text;
        image.setAttribute("src",langs[0].img);
        heading.innerText= langs[0].name;
    }
    else if(cnt==1){
      para.innerHTML = langs[1].text;
      image.setAttribute("src",langs[1].img);
      heading.innerText= langs[1].name;
    }
    else if(cnt==2){
      para.innerHTML = langs[2].text;
      image.setAttribute("src",langs[2].img);
      heading.innerText= langs[2].name;
    }
    else if(cnt==3){
      para.innerHTML = langs[3].text;
      image.setAttribute("src",langs[3].img);
      heading.innerText= langs[3].name;
    }
    else if(cnt==4){
      para.innerHTML = langs[4].text;
      image.setAttribute("src",langs[4].img);
      heading.innerText= langs[4].name;
    }
  
}
  
function varyPrev(){
    count--;
    if(count<0){
        count=4;
    }
    let cnt = count % 5;
  if(cnt==0){
      para.innerHTML = langs[0].text;
      image.setAttribute("src",langs[0].img);
      heading.innerText= langs[0].name;
  }
  else if(cnt==1){
    para.innerHTML = langs[1].text;
    image.setAttribute("src",langs[1].img);
    heading.innerText= langs[1].name;
  }
  else if(cnt==2){
    para.innerHTML = langs[2].text;
    image.setAttribute("src",langs[2].img);
    heading.innerText= langs[2].name;
  }
  else if(cnt==3){
    para.innerHTML = langs[3].text;
    image.setAttribute("src",langs[3].img);
    heading.innerText= langs[3].name;
  }
  else if(cnt==4){
    para.innerHTML = langs[4].text;
    image.setAttribute("src",langs[4].img);
    heading.innerText= langs[4].name;
  }
 
}