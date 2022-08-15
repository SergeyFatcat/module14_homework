

let XMLText = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

function getSrudentsFromXML(XMLString) {
	const parser = new DOMParser;
	let XMLDom = parser.parseFromString(XMLString, 'text/xml');

	let students = XMLDom.querySelectorAll('student');
	let studentsArr = [];
	students.forEach(student => {
		let objectFromXML = {};
		objectFromXML.name = `${student.querySelector('first').textContent} ${student.querySelector('second').textContent}`;
		objectFromXML.age = student.querySelector('age').textContent;
		objectFromXML.prof = student.querySelector('prof').textContent;
		objectFromXML.lang = student.querySelector('name').getAttribute('lang');
		studentsArr.push(objectFromXML);
	})
	return studentsArr;
}
result = getSrudentsFromXML(XMLText);
console.log(result);